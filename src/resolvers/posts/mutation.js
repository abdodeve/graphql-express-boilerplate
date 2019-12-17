const PostModel = require("./model");

/**
 * createPost
 * @param {*} _
 * @param {*} args
 */
const createPost = async (_, args) => {
  // Prepare Model
  let postModel = new PostModel({
    title: args.title,
    content: args.content,
    published: false
  });

  try {
    // Save
    const postSaved = await postModel.save();
    return postSaved;
  } catch (error) {
    console.error("postSave =>", error);
  }
};

/**
 * updatePost
 * @param {*} _
 * @param {*} args
 */
const updatePost = async (_, args) => {
  try {
    // Update
    const postUpdated = PostModel.findByIdAndUpdate(args.id, args, {
      new: true
    });
    return postUpdated;
  } catch (error) {
    console.error("postSave =>", error);
  }
};

/**
 * deletePost
 * @param {*} _
 * @param {*} args
 */
const deletePost = async (_, args) => {
  try {
    const removedPost = await PostModel.findByIdAndRemove(args.id);
    return removedPost;
  } catch (error) {
    console.error("deletePost =>", error);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost
};
