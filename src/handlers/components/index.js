import { COMPONENT_IDS } from '../../constants/index.js';
//import { handleAcceptButton } from './buttons.js';
import { handleSelectChoice } from './selectMenus.js';

/**
 * Routes message component interactions to their appropriate handlers
 */
export async function handleMessageComponent(req, res) {
  const componentId = req.body.data.custom_id;

  /**if (componentId.startsWith(COMPONENT_IDS.ACCEPT_BUTTON)) {
    return handleAcceptButton(req, res);
  }*/

  if (componentId.startsWith(COMPONENT_IDS.SELECT_CHOICE)) {
    return handleSelectChoice(req, res);
  }

  console.error(`Unknown component: ${componentId}`);
  return res.status(400).json({ error: 'unknown component' });
}
