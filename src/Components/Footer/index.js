import React from 'react'
import { useRoutes, A } from 'hookrouter';
import { MainContainer } from './element'
import { Container } from 'reactstrap'
import { routes } from '../../App';


export function Footer() {
      const routeResult = useRoutes(routes)
      return (
          <MainContainer>
              <Container>
                  <div>&copy; Copyright 2020 by Fredel. All Rights Reserved.</div>
              </Container>
          </MainContainer>
      )
  }