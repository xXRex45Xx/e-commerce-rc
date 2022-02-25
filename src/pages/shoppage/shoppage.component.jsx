import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
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
    collections: state.shop.collections
})

export default connect(mapStateToProps)(ShopPage)