import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

const CustomImageEditor = ({ image }) => {
  return (
    <ImageEditor
      includeUI={{
        loadImage: {
          /* là c'est ta photo par défaut, on peut aussi ne rien mettre du tout*/
          path: image.src.medium,
          name: "SamppleImage",
        },
        /*la variable de customisation cf ci-dessous*/
        theme,
        /*les éléments qu'on peut ajouter dans le plugin*/
        menu: [
          "shape",
          "filter",
          "text",
          "mask",
          "icon",
          "draw",
          "crop",
          "flip",
          "rotate",
        ],
        initMenu: "",
        uiSize: {
          width: "70vw",
          height: "74vh",
        },
        menuBarPosition: "left",
      }}
      cssMaxHeight={900}
      cssMaxWidth={800}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
      usageStatistics={true}
    />
  );
};
/*je l'ai ajoutée ici car ça fonctionnait pas ailleurs*/
const theme = {
  "common.bi.image": "https://i.ibb.co/JnFQMct/smal-logo-oh-my-quote.png",
  "common.bisize.width": "50px",
  "common.bisize.height": "50px",
  "common.background": "white",
  "menu.iconSize.width": "2vw",
  "menu.iconSize.height": "2vh",
  "submenu.backgroundColor": "transparent",
  "submenu.partition.color": "#e5e5e5",
};

export default CustomImageEditor;
