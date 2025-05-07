// import { peticionesHttp } from "../../helpers/peticiones-http";
// import "./DragDrop.scss";
// import { useEffect } from "react";

// const DragDrop = ({ campo, imagenActual, setForm }) => {
//   useEffect(() => {
//     const evitarDefault = (e) => e.preventDefault();
//     const eventos = ["dragenter", "dragleave", "dragover", "drop"];

//     eventos.forEach((evento) => {
//       document.body.addEventListener(evento, evitarDefault);
//     });

//     return () => {
//       eventos.forEach((evento) => {
//         document.body.removeEventListener(evento, evitarDefault);
//       });
//     };
//   }, []);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     console.log("[DROP] Archivos arrastrados");
//     const files = e.dataTransfer.files;
//     handleFiles(files);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const files = e.target.files;
//     handleFiles(files);
//   };

//   const handleFiles = async (files) => {
//     const file = files[0];
//     if (!file) return;

//     console.log("[handleFiles] Recibido:", file);

//     const url = import.meta.env.VITE_BACKEND_UPLOAD;
//     const urlPublica = import.meta.env.VITE_BACKEND_UPLOAD_PUBLIC;

//     const formData = new FormData();
//     formData.append("imagen", file);

//     try {
//       const options = {
//         method: "POST",
//         body: formData,
//       };

//       const subida = await peticionesHttp(url, options);
//       console.log("[uploadFile] Subida:", subida);

//       console.log("[setForm] Guardando:", `${urlPublica}/${subida.foto}`);
    
//       setForm((prev) => ({
//         ...prev,
//         [campo]: `${urlPublica}/${subida.foto}`,
//       }));
//     } catch (error) {
//       console.error("[handleFiles]:", error);
//     }
//   };

//   return (
//     <div className="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
//       <p>
//         Subí imagen para <b>{campo}</b> con File Dialog o arrastrándola.
//       </p>

//       <input
//         type="file"
//         id={`file-${campo}`}
//         accept="image/*"
//         onChange={handleChange}
//         style={{ display: "none" }}
//       />
//       <label className="drop-area-button" htmlFor={`file-${campo}`}>
//         File Dialog
//       </label>

//       <div className="drop-area-image">
//         {imagenActual && <img src={imagenActual} alt={`Imagen ${campo}`} />}
//       </div>
//     </div>
//   );
// };

// export default DragDrop;

import { useEffect } from "react";
import "./DragDrop.scss";

const DragDrop = ({ campo, imagenActual, setForm }) => {
  useEffect(() => {
    const evitarDefault = (e) => e.preventDefault();
    const eventos = ["dragenter", "dragleave", "dragover", "drop"];

    eventos.forEach((evento) => {
      document.body.addEventListener(evento, evitarDefault);
    });

    return () => {
      eventos.forEach((evento) => {
        document.body.removeEventListener(evento, evitarDefault);
      });
    };
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    console.log("[DROP] Archivos arrastrados");
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = async (files) => {
    const file = files[0];
    if (!file) return;

    console.log("[handleFiles] Enviando a Cloudinary:", file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("[Cloudinary] URL subida:", data.secure_url);

      setForm((prev) => ({
        ...prev,
        [campo]: data.secure_url,
      }));
    } catch (error) {
      console.error("[Cloudinary Upload Error]:", error);
    }
  };

  return (
    <div className="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
      <p>
        Subí imagen para <b>{campo}</b> con File Dialog o arrastrándola.
      </p>

      <input
        type="file"
        id={`file-${campo}`}
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <label className="drop-area-button" htmlFor={`file-${campo}`}>
        File Dialog
      </label>

      <div className="drop-area-image">
        {imagenActual && <img src={imagenActual} alt={`Imagen ${campo}`} />}
      </div>
    </div>
  );
};

export default DragDrop;
