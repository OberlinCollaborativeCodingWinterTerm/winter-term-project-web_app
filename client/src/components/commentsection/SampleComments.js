import React from 'react';

export const sampleComments = async () => {
  return [
  {
    commentId: "1",
    content: "This is a test comment!",
    username: "jsmith",
    parentCommentId: null,  //Not a reply
    replies: [],
    createdAt: "2023-01-12T18:56:29.530Z", //ISO 8601
    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png", //just for now
    user: {
     icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
     username: "jsmith",
     firstName: "John",
     lastName: "Smith",
     flair: "student"
    }
  },
  {
    commentId: "2",
    content: "This is my reply!",
    username: "bgeitz",
    parentCommentId: "1",  //Replied to comment "1"
    replies: [],
    createdAt: "2023-01-12T18:56:29.530Z",
    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    user: {
     icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
     username: "bgeitz",
     firstName: "Bob",
     lastName: "Geitz",
     flair: "professor" },
  }
  ];
};

export const createComment = async (inputText, parentCommentId = null) => {
  return {
    commentId: Math.random().toString(36).substr(2,9),
    content: inputText,
    parentCommentId,
    userId: "1",
    username: "jamesk",   //for experiment!
    createdAt: new Date().toISOString(),
    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  };
};

export const updateComment = async (inputText) => {
  return { inputText };
};

export const deleteComment = async () => {
  return {};
};
