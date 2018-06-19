export default {
  form: `
<select
  ref="{{input.ref ? input.ref : 'selectContainer'}}"
  {{ input.multiple ? 'multiple' : '' }}
  {% for (var attr in input.attr) { %}
  {{attr}}="{{input.attr[attr]}}"
  {% } %}
>{{options}}</select>
`,
};
