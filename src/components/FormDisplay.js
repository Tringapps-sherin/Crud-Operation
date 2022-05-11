import { useState, React } from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CardHeader, IconButton, Menu, MenuItem, Grid,Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText} from '@mui/material';
import Items from '../assets/Items.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../App.css'
export default function FormDisplay({ displayDetails, setDisplayDetails, setProductName, setProductPrice }) {

    const [dialogOpen, setOpen] = useState(false);
    const [storeIndex,setStoreIndex] = useState(null);
    const [editProduct,setEditProduct] = useState(null);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const handleOk = () => {
        handleDelete();
        setOpen(false);
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClickIcon = (event,index,product) => {
        setAnchorEl(event.currentTarget);
        setStoreIndex(index);
        setEditProduct(product)
    }
    const handleClose = () => {

        setAnchorEl(null);
    }
    const handleEdit = () => {
        setProductName(editProduct.ProductName)
        setProductPrice(editProduct.ProductPrice)
        handleDelete();
    }

    const handleDelete = () => {
        displayDetails.splice(storeIndex,1);
        setDisplayDetails(displayDetails)
        handleClose()
    }

    return (
        <>
            <Grid container spacing={3}>
                {
                    displayDetails.map((product,index) => {
                        return (
                            <Grid item xs={3}>
                            <div key={index}>
                                <Menu id='menus' anchorEl={anchorEl} open={open} MenuListProps={{
                                    'aria-labelledby': 'iconId',
                                }}
                                    onClose={handleClose}>
                                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                    <MenuItem onClick={handleClickOpen}>Delete</MenuItem>
                                </Menu>
                                
                                    <Card sx = {{margin:'30px'}}>
                                        <CardHeader title={product.ProductName}
                                            action={
                                                <IconButton id='iconId' aria-controls={open ? 'menus' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined}>
                                                    <MoreVertIcon  onClick={(event)=>handleClickIcon(event,index,product)}/>
                                                </IconButton>
                                            }
                                        />
                                        <CardMedia
                                            component='img'
                                            height='140'
                                            image={Items}
                                        />
                                        <CardContent>
                                            <Typography varient="body-2" color="text.secondary">Rs.{product.ProductPrice}</Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button size='small'>Share</Button>
                                            <Button size='small'>Learn More</Button>

                                        </CardActions>
                                    </Card>
            
                                <Dialog
                                    open={dialogOpen}
                                    onClose={handleClickClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Delete Product"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Do you want to delete this product item
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClickClose}>cancel</Button>
                                        <Button onClick={handleOk} autoFocus>
                                            Ok
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                            </div>
                            </Grid>
                        )
                       
                    })
                }
                </Grid>
    
        </>

    )
}
