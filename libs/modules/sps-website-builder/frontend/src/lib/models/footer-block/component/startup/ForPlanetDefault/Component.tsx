import { Component as ButtonArrays } from "../../../../buttons-array/component";
import { Component as Logotype } from "../../../../logotype/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <footer className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 w-full lg:w-3/12">
          {props.logotype ? (
            <Logotype
              isServer={props.isServer}
              {...props.logotype}
              variant="default"
            />
          ) : null}
        </div>
        <div className="flex lg:justify-end w-full lg:w-9/12 gap-4">
          {props.buttonsArrays?.map((buttonsArray, index) => {
            return (
              <div key={index} className="w-6/12 lg:w-3/12">
                <ButtonArrays isServer={props.isServer} {...buttonsArray} />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
