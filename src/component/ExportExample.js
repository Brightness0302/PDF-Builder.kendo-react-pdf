import './ExportExample.css';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';

function ExportExample () {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);
  
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4" });
  }

  return (
    <div className="app-content text-center">
      <PDFExport ref={pdfExportComponent} paperSize="A4" margin="1.5cm">
        <div ref={contentArea} className="width-100">
          <div className='header'>
            <div className='d-inlineblock'>
              <img className='header-log-icon' alt='log-icon' src={"2022-07-13_15-57-57.png"} />
            </div>
            <div className='d-inlineblock'>
              <p className='header-log-toptext'>MESSIER</p>
              <p className='header-log-bottomtext'>BLACKHOLE.MESSIER.APP</p>
            </div>
          </div>
          <hr />
          <div className='content'>
            <p className='content-header text-center underline'>COMPLIANCE REPORT &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div>
              <table>
                <tr>
                  <td colSpan={2}>
                    <p className='text-12 text-left margin-tb-0'>Note: <label className='text-8 table-value'>messier-ETH-10-1</label></p>
                    <p className='text-8 overflow-break1 margin-tb-0'>0xd34cca51f46e78cc0092503d8b121f1ef654558261280bc2692b134775fd19cc906ead47083c5161664f5e242707157bc11a03a2d053fbb0e55f2ce053fb</p>
                  </td>
                </tr>
                <tr>
                  <th className='table-key text-12 text-center'>Deposit</th>
                  <th className='table-value text-12 text-center'>Withdrawal</th>
                </tr>
                <tr>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-key'>Amount: </label><label className='table-value'>0.1 ETH</label></div>
                  </td>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-value'>Amount: </label><label className='table-key'>0.098 ETH</label></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-key'>Verified: </label><label className='table-value'>Yes</label></div>
                  </td>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-value'>Verified: </label><label className='table-key'>Yes</label></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-key'>Date: </label><label className='table-value'> Jun 20, 2022 3:18 AM +UTC</label></div>
                  </td>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-value'>Date: </label><label className='table-key'>Jul 3, 2022 7:37 AM +UTC</label></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-key'>Transaction: </label><p className='table-value overflow-break margin-tb-0'><a href='https://etherscan.io/tx/0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02'>0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02</a></p></div>
                  </td>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-value'>Transaction: </label><p className='table-key overflow-break margin-tb-0'><a href='https://etherscan.io/tx/0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02'>0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02</a></p></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-key'>From: </label><label className='table-value overflow-break margin-tb-0'><a href='https://etherscan.io/address/0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02'>0x769b242b0e1addc5af2bf69958d8d94ace4c36b4</a></label></div>
                  </td>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-value'>To: </label><label className='table-key overflow-break margin-tb-0'><a href='https://etherscan.io/address/0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02'>0x7239e069f10bd65a520f2858a1d96d0879a060fb</a></label></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-key'>Commitment: </label><p className='table-value overflow-break margin-tb-0'><a href='https://etherscan.io/tx/0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02'>0x1311a5b52adb8c867e156d7b8fd596fed97d484d53bff41b00c59a3a56a14baf</a></p></div>
                  </td>
                  <td>
                    <div className='margin-l-3 text-8'><label className='table-value'>Nullifier Hash: </label><p className='table-key overflow-break margin-tb-0'><a href='https://etherscan.io/tx/0x134154887fc51bb8aee8ddf1ab1dd60e2a41728a2095074ee6a7af718672df02'>0x2bd39140f04f56aab6c9fa6bb2ac5057413490c019e1aa6aaaad70113fc83</a></p></div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className='footer'>
            <div className='underline text-8 text-left'>DISCLAIMER &nbsp;&nbsp;</div>
            <div className='text-left'>
              <p className='text-8'>THIS COMPLIANCE REPORT IS FOR INFORMATIONAL PURPOSES ONLY. YOU SHOULD CONFIRM THE VALIDITY OF THIS REPORT<br/> BY USING MESSIER ’S COMPLIANCE TOOL ( HTTPS : // BLACKHOLE . MESSIER.APP / COMPLIANCE ) OR VIA ANY OTHER CRYPTO<br/>GRAPHIC SOFTWARE THAT CAN COMPUTE AND VERIFY THE INFORMATION CONTAINED HEREIN ( THE "MESSIER COMPLIANCE<br/> TOOL" ).</p>
              <p className='text-8'>ANY  DISCREPANCIES  BETWEEN  INFORMATION  FOUND  IN  THIS  REPORT  AND  PROVIDED  BY  THE  ABOVE  TOOL  INDICATE  THAT<br/> THE INFORMATION IN THIS REPORT MAY BE INACCURATE AND/OR FRAUDULENT. </p>
            </div>
            <div className='text-left'>
              <div className='d-inlineblock footer-logo-text'>
                <p className='text-8'>THE COMPLIANCE REPORT IS PROVIDED "AS IS," WITHOUT WARRANTY  OF  ANY  KIND,  EXPRESS  OR<br/> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR<br/> A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OF MESSIER<br/>.APP COMPLIANCE TOOL BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN<br/> AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH<br/> THIS COMPLIANCE REPORT.</p>
              </div>
              <div className='d-inlineblock text-right'>
                <img className='footer-log-icon' alt='log-icon' src={"logo-maker-for-craft-beer-brands-with-circle-badge-1205a.png"} />
              </div>
            </div>
          </div>
          <div className="button-area">
            <Button primary={true} onClick={handleExportWithComponent}>Export with Component</Button>
            <Button onClick={handleExportWithFunction}>Export with Method</Button>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}

export default ExportExample;
