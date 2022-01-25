import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  './Product.css';
import { Link, useHistory } from 'react-router-dom';

const Product = ({ product }) => {
 
    const { name, img, discription, id, price } = product;

    const history = useHistory();

    const BuyNow = () =>{
        history.push('/ProductBuyNow')
    }
  
    return (
            <Grid item xs={4} sm={4} md={4} data-aos="fade-right">
             <Card  sx={{ minWidth: 275 }} data-aos="fade-right">
                <CardContent className='hover-style' data-aos="fade-right">
                  <img style={{width: '100%'}} src={img} alt="" data-aos="fade-right" />
                    <Typography data-aos="fade-right" variant='h3' sx={{fontWeight: 'bold', fontSize: 30, color: '#00e5ff' }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body"  data-aos="fade-right" component="div">
                        {discription}
                    </Typography>
                </CardContent>
                <Box  textAlign='center' sx={{ mb: 2 }} data-aos="fade-right">
                  <Typography variant="h6" sx={{mb:2}}  data-aos="fade-right" component="div">
                        ${price}
                    </Typography>
                  <Link style={{textDecoration: 'none'}} to={`/ProductBuyNow/${id}`} data-aos="fade-right">
                      <Button onClick={BuyNow} variant='contained'>Buy Now</Button>
                  </Link>
                </Box>
            </Card>
        </Grid>

    );
};

export default Product;

