import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector";

class ShopPage extends React.Component {
    render() {
        if (this.props.collections) {
            return (
                <div className="shop-page">
                    {this.props.collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))}
                </div>
            )
        }
        else{
            return (
                <div className="shop-page"></div>
            )
        }
    }
}

const mapStateToProps = state => ({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(ShopPage)