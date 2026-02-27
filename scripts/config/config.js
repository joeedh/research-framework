import {MeshTypes} from '../core/mesh_base.js';

export default {
  MESH_HANDLES        : true,
  SELECTMASK          : MeshTypes.VERTEX | MeshTypes.HANDLE | MeshTypes.EDGE | MeshTypes.FACE,
  ENABLE_EXTRUDE      : true,
  AUTOSAVE            : false,
  AUTOSAVE_INTERVAL_MS: 1500,
  DRAW_TEST_IMAGES    : false,
};
