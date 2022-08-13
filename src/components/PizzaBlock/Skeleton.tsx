import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#dedede"
        foregroundColor="#ecebeb"
    >
        <rect x="3" y="250" rx="10" ry="10" width="280" height="27" />
        <circle cx="139" cy="118" r="114" />
        <rect x="0" y="293" rx="10" ry="10" width="280" height="88" />
        <rect x="3" y="410" rx="10" ry="10" width="91" height="27" />
        <rect x="125" y="401" rx="25" ry="25" width="153" height="45" />
    </ContentLoader>
)

export default Skeleton