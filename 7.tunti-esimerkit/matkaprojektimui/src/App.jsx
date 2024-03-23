// import './App.css'

import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material"
import Matka from "./components/Matka"

function App() {

  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            MatkaApp
          </Typography>  
        </Toolbar>
      </AppBar>
        <Matka />
      </Container>
    </>
  )
}

export default App
