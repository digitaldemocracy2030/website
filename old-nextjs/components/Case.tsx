import {Box, Heading, Text} from '@chakra-ui/react'

export function Case() {
  return (
    <Box mx={'auto'} maxW={'900px'}>
      <Heading fontSize={'3xl'} mb={5}>活用事例</Heading>
      <Text mb={10}>
        デジタル民主主義2030の取り組みはオープンソースで公開されており、誰でも自由に活用することができます。<br/>
        以下に、実際に活用された事例をご紹介します(順不同・敬称略)。
      </Text>
      <Box
        border={'1px solid #e2e8f0'}
        p={10}
      >
        <Text fontSize={'lg'} textAlign={'center'} mb={5}>活用事例はまだ掲載がありません</Text>
        <Text textAlign={'center'}>活用事例を募集しています、詳しくは Slack へご参加ください！</Text>
      </Box>
    </Box>
  )
}
