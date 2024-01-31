import React, { useState, useEffect } from "react";
import "../../styles.css";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {getAllRefunds, pigination } from "../../admin/helper/adminapicall";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Typography, Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { isAuthenticated } from '../../auth/helper/index';
import Cancel from "../../user/Cancellations/Cancel"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBarv2"
import TablePagination from '@mui/material/TablePagination';

const RewardPoints = () => {

    const { user, token } = isAuthenticated();
    const [refund, setRefund] = useState([]);
    const [selectedCancellation, setSelectedCancellation] = useState({});
    const [isViewDialogOpen, setViewDialogOpen] = useState(false);
    const [page , setPage] = useState(0)
    const [total, setTotal] = useState()


    const preload = () => {
        getAllRefunds(user._id, token, page).then((data) => {
          console.log(data, "YY")  //bookingId is in form of _id
        if (data.err) {
          console.log(data.err);
        } else {
            setRefund(data.refunds);
          setTotal(data.totalRefund)
        }
      });
    };
    
    useEffect(() => {
      preload();
    }, []);

    const handlePagination = async (event , newPage) => {
        setPage(newPage)
        event.preventDefault()
    
        await getAllRefunds(newPage).then((data) => {
          if (data.err) {
            console.log(data.err);
          } else {
            setRefund(data.refunds);
          }
        })
          .catch((error) => {
            console.error("Error fetching trip data:", error);
            // setError("Error fetching trip data");
          });
      }
  
      const handleChangeRowsPerPage = (event) => {
  
      };
  

    const handleViewButtonClick = (selectedRow) => {
        setSelectedCancellation(selectedRow)
        setViewDialogOpen(true)
    }

    const handleCloseViewDialoge = () => {
        setViewDialogOpen(false)
    }

  return (
    <>
    <Navbar/>
      <Typography variant="h5" align="center" gutterBottom sx={{ margin: '30px 0' }}>
          My Refunds
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          View All Refunds here
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
        <Table sx={{ minWidth: 300, maxWidth: 600 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Trip Deatails </TableCell>
                <TableCell>Refund Amount</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {refund.map((points) => (
                     <TableRow key={points._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <div style={{ marginBottom: '8px' }}>
                           Trip Name : {points.tripName}
                            </div >
                            <div>
                                {points.tripDestinationA} to {points.tripDestinationB}
                            </div>
                        </TableCell >
                        <TableCell component="th" scope="row">
                            <div style={{ color: points.refundAmount >= 0 ? 'green' : 'red' }}>
                               {points.refundAmount}
                            </div>
                    {/* <VisibilityIcon onClick={() => handleViewButtonClick(points)}></VisibilityIcon> */}
                   
                  </TableCell>
                     </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
      component="div"
      count={total}
      page={page}
      onPageChange={handlePagination}
      rowsPerPage={5}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

        {/* Dialoge code to display view Booking details */}

        {/* <Dialog open={isViewDialogOpen} onClose={handleCloseViewDialoge}>
        <DialogTitle>Booking Details</DialogTitle>
        <DialogContent>
        {selectedCancellation && (
            <div>
                <p>Trip Name: {selectedCancellation.tripName}</p>
                <p>Trip Destination(TO): {selectedCancellation.tripDestinationA}</p>
                <p>Trip Destination(FROM): {selectedCancellation.tripDestinationB}</p>
                <p>Start Time: {selectedCancellation.StartTime}</p>
                <p>End Time: {selectedCancellation.EndTime}</p>
            </div>
        )}


            
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseViewDialoge} color="primary">
              Close
            </Button>

          </DialogActions>
        </Dialog> */}
    </>
  )
}

export default RewardPoints