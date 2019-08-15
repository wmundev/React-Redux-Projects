import React from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/CollectionPreview";

class ShopPage extends React.Component {
  state = { previewsData: SHOP_DATA };

  renderPreview = () => {
    const previewsContent = this.state.previewsData.map(preview => (
      <CollectionPreview key={preview.id} {...preview} />
    ));
    return previewsContent;
  };

  render() {
    return (
      <div className="shop-page">
        {this.renderPreview()}
      </div>
    );
  }
}

export default ShopPage;
