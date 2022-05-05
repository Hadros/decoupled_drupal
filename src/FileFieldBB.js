import React, { useCallback } from "react";
import { Field } from "react-final-form";

const FileFieldBB = (props) => {
  if (props.avatar) {
    console.log(Object.keys(props.avatar).length);
    console.log(File.isPrototypeOf(props.avatar));
    console.log(Object.getPrototypeOf(props.avatar))
    console.log(props.avatar instanceof File);
  }
  console.log('FileFieldBB', props);
  if (('id' in props.avatarDefaultValue && props.avatarDefaultValue.id !== undefined) ||
    (props.avatar && props.avatar instanceof File)) {
    return (
      <>
        <Field {...props}>
          {props =>
            <div>
              <FileRemoveButton
                {...props}
              />
            </div>
          }
        </Field>
      </>
    );
  }
  else {
    return (
      <>
        <Field {...props} component={FileInput} />
      </>
    );
  }
};

const FileInput = (props) => {
  console.log('FileInput', props);
  return (
    <div>
      <input onChange={props.onChange} type='file'/>
    </div>
  );
}

const FileRemoveButton = (props) => {
  console.log('FileRemoveButton', props);
  let fileName = 'name' in props.avatarDefaultValue
    ? props.avatarDefaultValue.name
    : props.avatar.name;

  return (
    <div>
      <button type="button" onClick={props.onAvatarRemove}>Remove</button>
      <span>{fileName}</span>
    </div>
  );
}

export default FileFieldBB;
