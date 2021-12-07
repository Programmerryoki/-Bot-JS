const createEmbed = (Title, Description, FieldList) => {
  const embed = {
    color: 0x0099ff,
    title: Title,
    author: {
      name: 'あるかん',
      icon_url: 'https://icedrive.net/0/452dgU6Qeb',
    },
    description: Description,
    fields: FieldList,
    image: {
      url: '',
    },
    timestamp: new Date(),
    footer: {
      text: 'あるかん by Programmerryoki',
      icon_url: 'https://icedrive.net/0/452dgU6Qeb',
    },
  };

  return embed;
};

const createField = (Title, Value, inline) => {
  const field = {
    name: Title,
    value: Value,
    inline: inline,
  }
  return field;
}

module.exports = {
  createEmbed,
  createField
};