import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import React from 'react';
import { PageContainer } from '../components/Commons';

const changeColor = (args) => {
  document.getElementById('preview').style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <PageContainer Title={'Color Picker'}>
      <div className="flex flex-col items-center gap-3">
        <div id="preview"></div>
        <div className="flex gap-10 items-center flex-wrap">
          <div className="flex flex-col gap-5 text-xl font-bold h-96 items-center">
            <p>Inline Picker</p>
            <ColorPickerComponent
              mode="Palette"
              inline
              showButtons={false}
              modeSwitcher={false}
              change={changeColor}
            />
          </div>
          <div className="flex flex-col gap-5 text-xl font-bold h-96 items-center">
            <p>Inline Picker</p>
            <ColorPickerComponent
              inline
              modeSwitcher={false}
              showButtons={false}
              change={changeColor}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ColorPicker;
