# QR Code Generator

Welcome to the **QR Code Generator** project! This tool allows users to generate QR codes for single or bulk data, with additional features to download and print the generated QR codes.

## Features

- **Single QR Code Generation**: Create a QR code for a single URL, text, or any other data.
- **Bulk QR Code Generation**: Generate multiple QR codes at once using a CSV or plain text input file.
- **Download Option**: Save the generated QR codes to your device as image files.
- **Print Option**: Print QR codes directly from the platform.
  
## Demo

You can try the QR Code Generator live here:  
[https://qrcodegenrators.netlify.app/](https://qrcodegenrators.netlify.app/)

## How to Use
![image](https://github.com/user-attachments/assets/70a902c9-a4d6-4846-9f8c-52dd32be3cb0)

### Single QR Code Generation
1. Enter the text or URL that you want to encode in the QR code.
2. Click on the **Generate** button.
3. The QR code will be displayed on the screen.
4. You can **Download** the QR code by clicking on the **Download** button, or you can print it using the **Print** button.

### Bulk QR Code Generation
1. Prepare a CSV file or plain text file where each line contains one piece of data (e.g., URL or text).
2. Upload the file by clicking the **Upload File** button.
3. The system will generate a QR code for each entry in your file.
4. You can **Download** the generated QR codes as individual image files or a zip archive.
5. You can also **Print** the batch of QR codes.

### Download QR Code
After generating a QR code (either single or bulk), you can download it by clicking the **Download** button. You will be able to save the QR code image on your device.

### Print QR Code
If you'd like to print a QR code, simply click on the **Print** button. This will open the print dialog for your browser, allowing you to print the QR code.

## Tech Stack

- **Frontend**: React js, css, Material UI(Mui)
- **Libraries Used**:
  - [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation.
  - [FileSaver.js](https://github.com/eligrey/FileSaver.js/) for downloading QR codes.

## Setup and Development

To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/qr-code-generator.git
    cd qr-code-generator
    ```

2. Install dependencies (if any):
    ```bash
    npm install
    ```

3. Open `index.html` in a web browser to run the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. All contributions are welcome!

---

**Enjoy generating your QR codes!**
