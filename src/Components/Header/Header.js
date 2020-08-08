import React from 'react'
import { useRoutes, A } from 'hookrouter';
import { Flexbox, HeaderContainer } from './element'
import { Container } from 'reactstrap'
import { routes } from '../../App';


export function Header() {
      const routeResult = useRoutes(routes)
      return (
          <HeaderContainer>
              <Container>
                  <Flexbox>
                      {/* desktop view */}
                      <div className="nav-desktop">
                          <ul>
                              <li>
                                <A href="/">Home</A>
                              </li>

                              <li>
                                <A href="/register">Register</A>
                              </li>

                              {/* <li>
                                <A href="/">Home</A>
                              </li> */}
                          </ul>
                      </div>
                      {/* mobile view */}
                      <div className="nav-mobile">
                      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                        <label for="openSidebarMenu" class="sidebarIconToggle">
                            <div class="spinner diagonal part-1"></div>
                            <div class="spinner horizontal"></div>
                            <div class="spinner diagonal part-2"></div>
                          </label>
                          <div id="sidebarMenu">
                              <div class="sidebarMenuMain">
                                  <ul class="sidebarMenuInner">
                                    <li>
                                        <A href="/">Home</A>
                                    </li>

                                    <li>
                                        <A href="/register">Register</A>
                                    </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </Flexbox>
              </Container>
          </HeaderContainer>
      )
  }

 
