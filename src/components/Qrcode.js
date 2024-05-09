const Qrcode = () => {
  return (
    <div className="Container">
            <h1>QR Code Generator </h1>
             <img src="images/img1.png"className="imag"width={120}height={120}></img> 
            <div> 
                <label htmlFor="storeData"className="input-label">Data for QR Code</label>
                <input type="text"id="storeData"placeholder="Enter data for Qrcode"></input>
                <label htmlFor="imgsize"className="input-label"> Image Size(e.g..150);</label>
                <input type="text"id="imgsize"placeholder="Enter image Size"></input>
                <button>Download QR Code</button>
                <button  className="genere">Generate QR Code</button>
                
            </div>
           <div className="footer">
           <p>Designed By <a href="https://www.youtube.com/watch?v=KqrWo525VUU&t=1191s">Tutor Joes</a></p>
           </div>

    </div>
  )
}
export default Qrcode;