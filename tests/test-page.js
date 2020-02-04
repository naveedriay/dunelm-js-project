import {Selector} from 'testcafe';

class TestPage {
    checkBox    = Selector('#checkbox-example input');
    RemoveBtn   = Selector('#checkbox-example button').withText('Remove');
    AddBtn      = Selector('#checkbox-example button').withText('Add');
    CheckboxMsg = Selector('#checkbox-example p');

    textField    =  Selector('#input-example input');
    EnableBtn    =  Selector('#input-example button').withText('Enable');
    DisableBtn   =  Selector('#input-example button').withText('Disable');
    textFieldMsg =  Selector('#input-example #message');
}
export default new TestPage();