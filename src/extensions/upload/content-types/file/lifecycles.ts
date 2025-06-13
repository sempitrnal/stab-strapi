export default {
  async afterCreate(event) {
    const { result } = event;
    if (result.url && !result.previewUrl) {
      result.previewUrl = result.url;
    }
  },
  async afterUpdate(event) {
    const { result } = event;
    if (result.url && !result.previewUrl) {
      result.previewUrl = result.url;
    }
  },
};
