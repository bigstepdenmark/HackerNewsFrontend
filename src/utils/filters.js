module.exports = {
  gLobalfilters: {
    username: function username(value) {
      return '<span class="badge badge-pill badge-warning" data-toggle="tooltip" data-placement="top" title="Posted by"><i class="fa fa-user-circle-o" aria-hidden="true"></i> ' + value + '</span>';
    },
    printsub: function (value) {
      if (value.length <= 45) return value;
      return value.substring(0, 45) + '...';
    },
    point: function (value) {
      return '<span class="badge badge-pill badge-dark" data-toggle="tooltip" data-placement="top" title="Points"><i class="fa fa-star" aria-hidden="true"></i> ' + value + '</span>';
    }
  }
};
