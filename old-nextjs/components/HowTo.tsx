import {Box, Button, Card, Heading, Image, Stack, Text} from '@chakra-ui/react'
import Link from 'next/link'

export function HowTo() {
  return (
    <Box mx={'auto'} maxW={'900px'} mb={20}>
      <Heading fontSize={'3xl'} mb={5}>参加方法</Heading>
      <Text mb={5}>
        デジタル民主主義2030プロジェクトは、誰でも参加することができます。<br/>
        プロジェクトに参加することで、デジタル技術を活用した新しい形の市民参加や政策提言に関わることができます。
      </Text>
      <Stack direction={['column', 'row']}>
        <Card.Root maxW="sm" overflow="hidden" minH={'410px'}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="2">
            <Card.Title>開発する</Card.Title>
            <Card.Description>
              エンジニアやデザイナーの方は、GitHubでオープンソース開発に参加できます。
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Link href={'https://github.com/digitaldemocracy2030'} target={'_blank'}>
              <Button>GitHub を開く</Button>
            </Link>
          </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden" minH={'410px'}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="2">
            <Card.Title>導入する</Card.Title>
            <Card.Description>
              自治体・政党・企業団体の方は、デジタル民主主義2030プロジェクトの取り組みを導入して、市民参加を促進できます。
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Link href={'https://join.slack.com/t/dd2030/shared_invite/zt-3bg5nmxiv-CB9LXLpvxH_JvJil_EPa_w'} target={'_blank'}>
              <Button variant="solid">Slack に参加する</Button>
            </Link>
          </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden" minH={'410px'}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="2">
            <Card.Title>利用する</Card.Title>
            <Card.Description>
              どなたでも広聴AIや大規模熟議を利用して、様々な意見や議論を届けることができます。ぜひ以下の活用事例からご参加ください！
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Box>
  )
}
