
import { generatePseudoData} from './data.js';
import { renderPictures } from './miniature.js';
import { renderGallery } from './galery.js';
import openForm from './form.js';
import { updateScale } from './scaling.js';
// import applyEffect from './efect.js';


renderPictures(generatePseudoData());

renderGallery(generatePseudoData());

openForm();
updateScale();
// applyEffect();
