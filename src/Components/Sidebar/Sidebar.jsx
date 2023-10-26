import { Box, Flex, Heading,  HStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import React from 'react'
import { BsHourglassSplit } from 'react-icons/bs'
import { BiHomeCircle } from 'react-icons/bi'

import { Link } from 'react-router-dom'

const Sidebar = () => {
   return (
      <Box w={'full'}  px={3} py={10} h={'auto'} bg={'gray.500'} >
         <Box w={'full'}>
            <Flex justifyContent={'center'} alignItems={'center'}>
               <BsHourglassSplit fontSize={'30px'} />
               <Heading fontSize={'23px'}>Muxtasham</Heading>
            </Flex>
         </Box>
         <Box py={10} px={3} >
            <Box color={'white'} fontSize={'1.2em'} flexDirection={'column'} spacing={'1.2em'}>

               <HStack py={2}>
                  <BiHomeCircle fontsize={'20px'} />
                  <Link to={'/'} fontSize={'20px'}>Asosiy</Link>
               </HStack>



               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'/foydalanuvchilar '}>
                     Foydalanuvchilar
                  </Link>
               </HStack>




               <Accordion allowToggle >
                  <AccordionItem>
                     <h2>
                        <AccordionButton>
                           <Box as="span" flex='1' fontSize={'xl'}
                              textAlign='left'>
                              Sozlamalar
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>

                        <Accordion allowToggle >
                           <AccordionItem>
                              <h2>
                                 <AccordionButton>
                                    <Box as="span" flex='1' fontSize={'xl'}
                                       textAlign='left'>
                                       Eshik
                                    </Box>
                                    <AccordionIcon />
                                 </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/chaspak'}>
                                       chaspak
                                    </Link>
                                 </HStack>

                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/doborlar'}>
                                       doborlar
                                    </Link>
                                 </HStack>

                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/eshikTurlari'}>
                                       eshikTurlari
                                    </Link>
                                 </HStack>


                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/framogaShakllari'}>
                                       framogaShakllari
                                    </Link>
                                 </HStack>


                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/korona'}>
                                       korona
                                    </Link>
                                 </HStack>


                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/kubik'}>
                                       kubik
                                    </Link>
                                 </HStack>


                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/nalichniklar'}>
                                       nalichniklar
                                    </Link>
                                 </HStack>


                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/nalichniklar'}>
                                       Snalichniklar
                                    </Link>
                                 </HStack>


                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/nalichniklar'}>
                                       nalichniklar
                                    </Link>
                                 </HStack>

                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/qulfTurlari'}>
                                       qulfTurlari
                                    </Link>
                                 </HStack> <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/sapog'}>
                                       sapog
                                    </Link>
                                 </HStack>
                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/tabaqalar'}>
                                       tabaqalar
                                    </Link>
                                 </HStack>


                              </AccordionPanel>
                           </AccordionItem>

                        </Accordion>

                        <Accordion allowToggle >
                           <AccordionItem>
                              <h2>
                                 <AccordionButton>
                                    <Box as="span" flex='1' fontSize={'xl'}
                                       textAlign='left'>
                                       Shisha
                                    </Box>
                                    <AccordionIcon />
                                 </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/Sishashakllari'}>
                                    Shisha shakllari
                                    </Link>
                                 </HStack>

                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/Sishaturlari'}>
                                    Shisha turlari
                                    </Link>
                                 </HStack>

                                 <HStack py={'2'}>
                                    <BiHomeCircle fontSize={'20px'} />
                                    <Link fontSize={'20px'} to={'/Sishalar'}>
                                       Shishalar
                                    </Link>
                                 </HStack>

                              </AccordionPanel>
                           </AccordionItem>

                        </Accordion>


                     </AccordionPanel>
                  </AccordionItem>

               </Accordion>







               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'lavozimlar'}>
                     Lavozimlar
                  </Link>
               </HStack>

               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'/buyurtmachilar '}>
                     Buyurtmachilar
                  </Link>
               </HStack>

               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'xodimlar'}>
                     Xodimlar
                  </Link>
               </HStack>

               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'skladlar'}>
                     Skladlar
                  </Link>
               </HStack>

               {/* 3-4 akardionlar */}

               <Accordion allowToggle>

                  <AccordionItem>
                     <h2>
                        <AccordionButton>
                           <Box as="span" flex='1' fontSize={'xl'}
                              textAlign='left'>
                              Tovarlar
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'/kategoriyalar '}>
                  Kategoriyalar
                  </Link>
               </HStack>

               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'/mahsulotlar '}>
                  mahsulotlar
                  </Link>
               </HStack>
                        

                     </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                     <h2>
                        <AccordionButton>
                           <Box as="span" flex='1' fontSize={'xl'}
                              textAlign='left'>
                              Detallar
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                       
                       
                     <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'/nalichniklar '}>
                     Nalichniklar
                  </Link>
               </HStack>

               <HStack py={'2'}>
                  <BiHomeCircle fontSize={'20px'} />
                  <Link fontSize={'20px'} to={'/doborlar '}>
                     Doborlar
                  </Link>
               </HStack>


                     </AccordionPanel>
                  </AccordionItem>
               </Accordion>


            </Box>
         </Box>


      </Box>
   )
}

export default Sidebar