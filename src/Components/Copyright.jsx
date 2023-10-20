import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Copyright(){

  const generatePDF = () => {
    const element = document.getElementById('PDF');
    html2canvas(element)
        .then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 190, 280);
            pdf.save('Resume.pdf');
        });
    };

    return (
      <div className="Copyright">
        <div className="CopyrightContainer">
          <p className="CopyrightText">Cv-Builder</p>
          <button onClick={generatePDF} className="Save">Save Cv</button>
        </div>
        <div className="CopyrightMadeBy">
          <a href="https://github.com/GeneZijlboot/CV-Builder">Copyright © Gene Zijlboot  </a>
        </div>
      </div>
  );
}

export default Copyright;