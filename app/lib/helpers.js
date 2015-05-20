nestCategories = function(parentId, dashes) {
  if (parentId === undefined)
    parentId = '';
  if (dashes === undefined)
    dashes = '';
  var list = [];
  var categories = Categories.find({parentId: parentId});

  categories.map(function(category) {
    list.push({
      label: dashes + ' ' + category.name,
      text: dashes + ' ' + category.name,
      id: category._id,
      value: category._id

    });
    nestCategories(category._id, dashes + '-').map(function(item) {
      list.push(item);
    });
  });

  return list;
};

