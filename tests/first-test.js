import { Selector } from 'testcafe';
import page from './test-page.js';

const url = 'http://the-internet.herokuapp.com/dynamic_controls';

// ceate a testsuite named 'Dunelm Demo' and originate it from page(url)
fixture ('Dunelm Demo').page(url);

test("Remove CheckBox Test", async tc => {
   if(page.RemoveBtn.exists){
     await tc
       .click(page.RemoveBtn)
       .expect(page.CheckboxMsg.innerText).contains('gone!')
       .expect(page.AddBtn.exists).ok()
       .expect(page.AddBtn.innerText).eql('Add')
       .expect(page.checkBox.exists).notOk();
   }
});

test('Enable TextField Test', async tc => {
   if(page.EnableBtn.exists){
      await tc
        .click(page.EnableBtn)
        .expect(page.textFieldMsg.innerText).contains('enabled!')
        .expect(page.DisableBtn.innerText).eql('Naveed')
        .expect(page.textField.exists).ok();
   }
});
