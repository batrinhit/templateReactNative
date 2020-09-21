const TYPE_SOCIAL = {
  Facebook: 'Facebook',
};

export const ModelSocial = (data) => {
  return {
    type: TYPE_SOCIAL.Facebook,
    id: data.id,
    token: data.token,
    email: data.email,
    avatar:
      data.picture && data.picture.data ? data.picture.data.url : undefined,
    name: data.name,
  };
};
