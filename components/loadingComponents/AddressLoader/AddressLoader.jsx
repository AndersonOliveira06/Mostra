import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const AddressLoader = () => (
    <ContentLoader
        speed={1.5}
        width={400}
        height={100}
        viewBox="0 0 400 100"
        backgroundColor="#FFF9DE"
        foregroundColor="#EDE8D6"
    >
        <Rect x="0" y="10" rx="6" ry="6" width="200" height="12" />
        <Rect x="0" y="32" rx="12" ry="12" width="310" height="20" />
        <Rect x="0" y="60" rx="8" ry="8" width="260" height="15" />
    </ContentLoader>
)

export default AddressLoader