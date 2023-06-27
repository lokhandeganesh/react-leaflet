import React from "react";
import {
  Marker, Popup, Tooltip,
} from 'react-leaflet';
import defaultIcon from "../icons/defaultIcon"


function MarkerLayer({ data }) {
  data.features.forEach(feature => {
    const { coordinates } = feature.geometry;

    const { district, id, name, ph_i,
      structure_type, taluka, vil_name, vincode } = feature.properties
    // console.log(district);

    return (
      < Marker key={id} position={[coordinates[1], coordinates[0]]} icon={defaultIcon} >
        <Popup>
          <div className="container mt-5">
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-sm">
                <thead className="bg-success text-white ">
                  <tr>
                    <th colSpan="2" className="text-align-center">NRM Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>District</th>
                    <td>{district}</td>
                  </tr>
                  <tr>
                    <th>Taluka</th>
                    <td>{taluka}</td>
                  </tr>
                  <tr>
                    <th>Village</th>
                    <td>{vil_name}</td>
                  </tr>
                  <tr>
                    <th>Village Code</th>
                    <td>{vincode}</td>
                  </tr>
                  <tr>
                    <th>Activity Name</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Phase</th>
                    <td>{ph_i}</td>
                  </tr>
                  <tr>
                    <th>Structure Type</th>
                    <td>{structure_type}</td>
                  </tr>
                  {/* <tr colSpan="2">
                        <th>Activity Image</th>
                      </tr>
                      <tr colSpan="2"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BxqXGmHk1fNrzsqDFduBXdl7SiHRniPKjeBsImeksXxSanwuj7JmW4gz3H1F2FsWmM&usqp=CAU"} alt={"img"} border={3} height={100} width={100} /></tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </Popup>
        <Tooltip>
          Tool Tip
        </Tooltip>
      </Marker >

    )




  });
}

export default MarkerLayer;

// export const MarkLayer = ({ data }) => {

//   return data.features.map(feature => {
//     const { coordinates } = feature.geometry;

//     const { district, id, name, ph_i,
//       structure_type, taluka, vil_name, vincode } = feature.properties
//     // console.log(district);
//     return (
//       <Marker key={id} position={[coordinates[1], coordinates[0]]} icon={defaultIcon}>
//         <Popup>
//           <div className="container mt-5">
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped table-sm">
//                 <thead className="bg-success text-white ">
//                   <tr>
//                     <th colSpan="2" className="text-align-center">NRM Activity</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th>ID</th>
//                     <td>{id}</td>
//                   </tr>
//                   <tr>
//                     <th>District</th>
//                     <td>{district}</td>
//                   </tr>
//                   <tr>
//                     <th>Taluka</th>
//                     <td>{taluka}</td>
//                   </tr>
//                   <tr>
//                     <th>Village</th>
//                     <td>{vil_name}</td>
//                   </tr>
//                   <tr>
//                     <th>Village Code</th>
//                     <td>{vincode}</td>
//                   </tr>
//                   <tr>
//                     <th>Activity Name</th>
//                     <td>{name}</td>
//                   </tr>
//                   <tr>
//                     <th>Phase</th>
//                     <td>{ph_i}</td>
//                   </tr>
//                   <tr>
//                     <th>Structure Type</th>
//                     <td>{structure_type}</td>
//                   </tr>
//                   {/* <tr colSpan="2">
//                       <th>Activity Image</th>
//                     </tr>
//                     <tr colSpan="2"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BxqXGmHk1fNrzsqDFduBXdl7SiHRniPKjeBsImeksXxSanwuj7JmW4gz3H1F2FsWmM&usqp=CAU"} alt={"img"} border={3} height={100} width={100} /></tr> */}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </Popup>
//       </Marker >
//     );
//   });
// }