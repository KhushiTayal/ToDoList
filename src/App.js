import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import PrivateRoute from './PrivateRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { UserAuthContextProvider } from "./Auth";
import './App.css';

const App = () => {

	return (
    <Container >
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Homepage />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
	);
}

export default App;
