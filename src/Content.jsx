//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//? Dahili bir resim eklemek için import yapmak gereklidir.
import img2 from "./img/camera.jpg";

//? Harici stillendirme dosyası
import "./Content.css";

const Content = () => {
    const imgStyle = {
        width: '460px',
        display: 'block',
        margin: '2rem auto'
    };
  return (
    <div className="content">
        {/* İnline Style */}
        <h2 style={{ color: "red" }}>React JS</h2>

        <p style={{ backgroundColor: "lightgreen" }}>
            React, Kullanici arabirimi tasarlamak için kullanilan bir JS kütüphanesidir.
        </p>

        <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="img1" />

        <img style={imgStyle} src={img2} alt="img2" width={"50%"}/>

        <p className="par-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis deleniti animi et, hic dicta perferendis facere laboriosam repudiandae quaerat sunt praesentium, culpa aliquid iste expedita voluptatibus distinctio tempore non soluta eum quae? Totam vero commodi in sequi perferendis omnis saepe.
        </p>
    </div>
  );
};

export default Content;