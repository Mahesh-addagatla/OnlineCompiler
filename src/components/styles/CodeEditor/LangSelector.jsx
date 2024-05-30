import { Box, Text,Button,Menu,MenuButton,MenuList,MenuItem, } from '@chakra-ui/react'
import React from 'react'
import { LANGUAGE_VERSIONS } from '../../../Constants'


const languages=Object.entries(LANGUAGE_VERSIONS)
const active_color="blue.400";
const LangSelector = ({language,onSelect}) => {

  return (
    <Box ml={2} mb={2}>
      <Text mb={2} fontStyle='lg' px={6} mt={3}>Language: </Text>
      <Menu>
  <MenuButton as={Button} px={8} bg="#3f3e3e" color="gray" borderRadius={2} m='10px' minH="20px" minW="8vw">
    {language}
  </MenuButton>
  <MenuList zIndex={1} border={2} bg="#110c1b" minH="100px" minW="10vw" m='5px' padding='5px'>
          {languages.map(([lang, version], index) => ( // Added index parameter
            <React.Fragment key={lang}>
              <MenuItem
                color={lang===language?"blue.400":""}
                bg={lang===language?"gray.700":"transparent"}
                onClick={() => onSelect(lang)}
                _hover={{ color: active_color,
                          bg:'gray.900'
                 }} // Hover effect
                _notLast={{ borderBottom: '1px solid #454545' }} // Separation line
              >
                {lang}
                &nbsp;
                <Text as='span' color="gray" fontSize="sm">
                  {version}
                </Text>
              </MenuItem>
              {index !== languages.length - 1 && <Box height="1px" bg="#454545" />} {/* Separation line */}
            </React.Fragment>
          ))}
        </MenuList>
</Menu>
    </Box>
  )
}

export default LangSelector;
