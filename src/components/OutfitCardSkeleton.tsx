import { Card, CardBody, Skeleton,SkeletonText } from '@chakra-ui/react'

const OutfitCardSkeleton = () => {
  return (
    <Card width='300px' height='350px' borderRadius={10}>
        <Skeleton />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default OutfitCardSkeleton;