const axios = require("axios");
const fs = require("fs/promises");
const { createWriteStream } = require("fs");
const path = require("path");

const requiredFontVariants = ["Default", "Primary"];
// "" means "normal"
const requiredFontStyles = ["", "Italic"];
const requiredFontWeights = ["Light", "Regular", "Medium", "SemiBold", "Bold"];

function snakeToCamel(str) {
  if (str[0] === "_") {
    return str;
  }

  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace("-", "").replace("_", "");
  });
}

const getThemeFromBackend = async (props) => {
  const envFile = process.env.ENV_FILE;
  require("dotenv").config({ path: `.env.${envFile}` });

  const themeData = await axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/theme?populate[fonts][populate]=%2A`,
    )
    .then((res) => {
      return res.data?.data;
    })
    .catch((error) => {
      console.log("getThemeFromBackend error: ", error.message);
    });

  if (themeData) {
    const data = JSON.stringify(themeData, " ", 2);

    await fs.writeFile(path.join(__dirname, "./themes/theme.json"), data);

    if (themeData.fonts) {
      const oldExistingFonts = await fs.readdir(
        path.join(__dirname, "./themes/fonts"),
      );

      for (const oldExistingFont of oldExistingFonts) {
        if (
          oldExistingFont !== ".gitkeep" &&
          oldExistingFont !== ".gitignore"
        ) {
          await fs.unlink(
            path.join(__dirname, `./themes/fonts/${oldExistingFont}`),
          );
        }
      }

      for (const font of themeData.fonts) {
        if (font.media.data) {
          const fontData = font.media.data;
          const fontVariant =
            font.variant === "default" ? "Default" : "Primary";
          const fontWeight = snakeToCamel(
            font.weight.charAt(0).toUpperCase() + font.weight.slice(1),
          );
          const fontStyle = font.style === "normal" ? "" : "Italic";
          const fileName = `${fontVariant}-${fontWeight}${fontStyle}${fontData.ext}`;

          const fontFile = await axios({
            url: fontData.url,
            method: "GET",
            responseType: "stream",
          }).then(async (response) => {
            await response.data.pipe(
              createWriteStream(
                path.join(__dirname, `./themes/fonts/${fileName}`),
              ),
            );
          });
        }
      }
    }
  }

  const existingFonts = await fs.readdir(
    path.join(__dirname, "./themes/fonts"),
  );

  if (!existingFonts.includes("Default-Regular.ttf")) {
    await fs.copyFile(
      path.join(__dirname, "./styles/fonts/Montserrat/Montserrat-Regular.ttf"),
      path.join(__dirname, "./themes/fonts/Default-Regular.ttf"),
    );
  }

  if (!existingFonts.includes("Primary-Regular.ttf")) {
    await fs.copyFile(
      path.join(__dirname, "./styles/fonts/Montserrat/Montserrat-Regular.ttf"),
      path.join(__dirname, "./themes/fonts/Primary-Regular.ttf"),
    );
  }

  for (const requiredFontVariant of requiredFontVariants) {
    for (const requiredFontWeight of requiredFontWeights) {
      for (const requiredFontStyle of requiredFontStyles) {
        if (
          !existingFonts.includes(
            `${requiredFontVariant}-${requiredFontWeight}${requiredFontStyle}.ttf`,
          )
        ) {
          await fs.copyFile(
            path.join(
              __dirname,
              `./themes/fonts/${requiredFontVariant}-Regular.ttf`,
            ),
            path.join(
              __dirname,
              `./themes/fonts/${requiredFontVariant}-${requiredFontWeight}${requiredFontStyle}.ttf`,
            ),
          );
        }
      }
    }
  }
};

getThemeFromBackend();
