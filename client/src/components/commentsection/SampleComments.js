import React from 'react';

export const sampleComments = async () => {
  return [
  {
    id: "1 ",
    content: "This is a test comment!",
    username: "jsmith",
    // user: {
    //  icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    //  username: "jsmith",
    //  firstName: "John",
    //  lastName: "Smith",
    //  flair: "student"
    // },
    parentCommentId: null,     //Not a reply
    createdAt: "2023-01-12T18:56:29.530Z" //ISO 8601
  },
  {
    id: "2",
    content: "Reply!",
    username: "bgeitz",
    // user: {
    //  icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    //  username: "bgeitz",
    //  firstName: "Bob",
    //  lastName: "Geitz",
    //  flair: "professor"
    // },
    parentCommentId: "1",  //Replied to comment "1"
    createdAt: "2023-01-12T18:56:29.530Z"
  }
  ];
};

export const createComment = async (inputText, parentCommentId = null) => {
  return {
    id: Math.random().toString(36).substr(2,9),
    content: inputText,
    parentCommentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (inputText) => {
  return { inputText };
};

export const deleteComment = async () => {
  return {};
};
