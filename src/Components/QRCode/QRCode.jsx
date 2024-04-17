import qr1 from '../../../Event host/Resourcess/icon/click (1) 1.png'
import qr2 from '../../../Event host/Resourcess/icon/click.png'
import qr3 from '../../../Event host/Resourcess/icon/check 1.png'
import qr4 from '../../../Event host/Resourcess/icon/Vector-1.png'

const QRCode = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-5">
        <h1 className="mb-5 text-4xl font-semibold">Automated QR Scanner</h1>
        <h1 className="mb-5 text-2xl text-[#7342F9]">
          Scan & Verify The Attendees Directly By Our QR Scanning Solution.
        </h1>
      </div>
      <div className="flex gap-2">
        {/* card 1 */}
        <div className="card w-96 bg-[#F1F3FF] text-black">
          <div className="card-body">
            <div className="card-actions justify-start">
              <img src={qr1}></img>
            </div>
            <h2 className="card-title">One Click</h2>
            <p>QR Verification System</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-96 bg-[#F1F3FF] text-black">
          <div className="card-body">
          <div className="card-actions justify-start">
              <img src={qr2}></img>
            </div>
            <h2 className="card-title">One time</h2>
            <p>QR Code</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-96 bg-[#F1F3FF] text-black">
          <div className="card-body">
          <div className="card-actions justify-start">
              <img src={qr3}></img>
            </div>
            <h2 className="card-title">Easy Access</h2>
            <p>Lorem Ispum Access</p>
            
          </div>
        </div>
        {/* card 4 */}
        <div className="card w-96 bg-[#F1F3FF] text-black">
          <div className="card-body">
          <div className="card-actions justify-start">
              <img src={qr4}></img>
            </div>
            <h2 className="card-title">Mail</h2>
            <p>Send Bulk Personalized Mail With Attachments</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
