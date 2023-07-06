import {Grid} from "@mui/material"
import { useState } from "react";
import { Container } from "@mui/system";
import SliderComponent from "./Components/Common/SliderComponent";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
function App() {
  const [data,setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  })
  return (
    <div>
      <Navbar/>
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData}/>
              <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
              <Result data={data} setData={setData}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
