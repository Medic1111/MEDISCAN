import React from "react";

function detailform()
{
  return(
<div style="background-color:#E7D2F8;padding-left:100px;padding-right:100px">


    <div style="padding-left:500px ;background-color:#D6CDDC; height:700px;border-width:10px">

     <div style="padding-left:150px;padding-top:50px;padding-bottom:30px">
       <input type="file"  onchange="background-image:file-input" id="file-input"accept="image/jpeg" alt="image" style="padding-left: 20px;border-radius:100%;height:100px;width:100px;background-color:#E7D2F8 ;"></button>
     </div>
      <div  style="background-color:#FCFBFB;width: 50%;height :50%;border-radius:10px">

        <form  >
        <table style="padding:60px" >
           <tr>
               <td >
                 <input type='text' alt="medication" placeholder="medication"
                    style="width:300px;height:30px; border-radius:10px;border-width:1px;border-color:#D6CDDC"
                 ></input></td>
           </tr>
           <tr>
               <td>
                <input type='text' placeholder="alergies"
                    style="width:300px;height:30px; border-radius:10px;border-width:1px;border-color:#D6CDDC"
                 ></input></td>
           </tr>
           <tr>
               <td>
                <input type='text'placeholder="medical history"
                  style="width:300px;height:30px; border-radius:10px;border-width:1px;border-color:#D6CDDC"></input></td>
           </tr>
        </table>
        </form>

        <div style="padding-left:180px;padding-bottom:30px">
          <button style="height:50px;width:70px;border-radius:30px;border-width:1px"> agree</button>
        </div>

        </div>

    </div>
    </div>
  );
}

export default detailform;