// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';

// const KYCVerificationTable = ({ users, onApprove, onDisapprove }) => {
//  return (
//     <TableContainer component={Paper}>
//       <Table aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Email</TableCell>
//             <TableCell align="right">Verification Materials</TableCell>
//             <TableCell align="right">Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell component="th" scope="row">
//                 {user.name}
//               </TableCell>
//               <TableCell align="right">{user.email}</TableCell>
//               <TableCell align="right">
//                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                  {/* Align document images with the video */}
//                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2px' }}>
//                     {user.documents.map((doc, index) => (
//                       <img key={index} src={doc} alt="Document" style={{ width: '100px', marginRight: '10px' }} />
//                     ))}
//                  </Box>
//                  {/* Video */}
//                  <video width="320" height="240" controls>
//                     <source src={user.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                  </video>
//                 </Box>
//               </TableCell>
//               <TableCell align="right">
//                 <Button variant="contained" color="success" size="large" onClick={() => onApprove(user.id)}>
//                  Approve
//                 </Button>
//                 <Button variant="contained" color="error" size="large" onClick={() => onDisapprove(user.id)}>
//                  Disapprove
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//  );
// };

// export default KYCVerificationTable;
