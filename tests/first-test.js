import { Selector } from 'testcafe';

const  checkBox    = Selector('#checkbox-example input');
const  RemoveBtn   = Selector('#checkbox-example button').withText('Remove');
const  AddBtn      = Selector('#checkbox-example button').withText('Add');
const  CheckboxMsg = Selector('#checkbox-example p');

const textField    =  Selector('#input-example input');
const EnableBtn    =  Selector('#input-example button').withText('Enable');
const DisableBtn   =  Selector('#input-example button').withText('Disable');
const textFieldMsg =  Selector('#input-example #message');
 

fixture ('Dunelm Demo')
   .page('http://the-internet.herokuapp.com/dynamic_controls');

test("Remove CheckBox Test", async t => {
   if(RemoveBtn.exists && checkBox.exists){
     await t
       .click(RemoveBtn)
       .expect(CheckboxMsg.innerText).contains('gone!')
       .expect(AddBtn.exists).ok()
       .expect(AddBtn.innerText).eql('Add')
       .expect(checkBox.exists).notOk();
   }
});

test('Enable TextField Test', async t => {
   if(EnableBtn.exists){
      await t
        .click(EnableBtn)
        .expect(textFieldMsg.innerText).contains('enabled!')
        .expect(DisableBtn.innerText).eql('Naveed')
        .expect(textField.exists).ok();
   }
});
