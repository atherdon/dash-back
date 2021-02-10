type RBAC = {
  node: string;
  minRole: number;
  roles: number[];
  schema?: 'user';
};

const rbac: RBAC[] = [
  {
    node: 'getOneUser',
    minRole: 1,
    roles: [],
    schema: 'user',
  },
];

export default rbac;
