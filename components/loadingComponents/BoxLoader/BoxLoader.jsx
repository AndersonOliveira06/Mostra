import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const BoxLoader = () => (
    <ContentLoader
        speed={1.5}
        width={390}
        height={770}
        viewBox="0 0 390 770"
        backgroundColor="#FFF9DE"
        foregroundColor="#EDE8D6"
    >
        <Rect x="20" y="0" rx="30" ry="30" width="390" height="770" />
    </ContentLoader>
)

export default BoxLoader