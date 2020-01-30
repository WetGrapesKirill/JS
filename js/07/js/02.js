// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

class Marker {
    // поле, которое хранит цвет маркера;
    // поле, которое хранит количество чернил в маркере (в процентах);

    constructor(_properties) {
        this.color = _properties.color
        this.amount = _properties.amount
    }

    // метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
    write(_text) {

        let count = 0;

        for (let i = 0; i < _text.length; i++) {
            if (_text[i] == ' ')
                count++;
        }

        if (this.amount >= ((_text.length - count) * 0.5)) {
            document.write(`
            <p style="
                font-size: 15px;
                color: ${this.color};
            ">
                ${_text.slice(0, _text.length)}
            </p>
            `);

            this.amount -= (_text.length - count)

        }

        else {
            document.write(`
            <p style="
                font-size: 15px;
                color: ${this.color};
            ">
                ${_text.slice(0, this.amount / 0.5)}
            </p>
            `);
            this.amount = 0;
        }

    }
}


// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

class SuperMarker extends Marker {

    constructor(_properties) {
        super(_properties);
    }

    fill(_number) {
        this.amount += _number;
    }

}

// Продемонстрировать работу написанных методов.

d = new Marker(
    {
        color: "red",
        amount: 100
    });
d.write("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusantium placeat dolores exercitationem, sed expedita perferendis consequatur ipsum consequuntur molestiae cumque id minus corrupti illo repellendus, tempore facere sequi sit. Soluta repudiandae autem et laboriosam eos. Fugit, libero sunt ipsum repellat voluptatum inventore quam corporis explicabo saepe doloribus assumenda autem quibusdam voluptate quisquam. Consequatur eveniet inventore obcaecati! Impedit aliquid illo similique saepe voluptate aspernatur provident nesciunt sed aperiam exercitationem cumque minus tenetur molestiae, magni rerum, dolores quia beatae libero illum ipsum est itaque dolorum? Iste ab commodi repellendus dolore, atque magni. Facere quidem voluptatum magni inventore possimus ratione temporibus id, non autem eligendi corrupti qui tenetur quasi doloremque placeat officia voluptate quas fuga, facilis voluptas! Mollitia ut consectetur consequuntur iusto tempore reiciendis totam repellendus, asperiores esse, quaerat et quo! Similique fugiat in soluta eaque perferendis facere nisi quas culpa ipsum expedita molestias doloribus maiores magni illum voluptate quisquam, consectetur est quibusdam sint. Sapiente dignissimos blanditiis aliquid inventore nam suscipit facere illo in sed? Optio quia totam voluptatum a placeat, suscipit reiciendis fuga ut natus ad delectus voluptatibus blanditiis debitis iusto quam est minus aspernatur. Ipsam autem veniam pariatur quaerat tenetur incidunt. Tempore ratione tempora voluptate ipsa magni quidem dicta dolorem!");

e = new SuperMarker(
    {
        color: "green",
        amount: 100
    });

e.write("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusantium placeat dolores exercitationem, sed expedita perferendis consequatur ipsum consequuntur molestiae cumque id minus corrupti illo repellendus, tempore facere sequi sit. Soluta repudiandae autem et laboriosam eos. Fugit, libero sunt ipsum repellat voluptatum inventore quam corporis explicabo saepe doloribus assumenda autem quibusdam voluptate quisquam. Consequatur eveniet inventore obcaecati! Impedit aliquid illo similique saepe voluptate aspernatur provident nesciunt sed aperiam exercitationem cumque minus tenetur molestiae, magni rerum, dolores quia beatae libero illum ipsum est itaque dolorum? Iste ab commodi repellendus dolore, atque magni. Facere quidem voluptatum magni inventore possimus ratione temporibus id, non autem eligendi corrupti qui tenetur quasi doloremque placeat officia voluptate quas fuga, facilis voluptas! Mollitia ut consectetur consequuntur iusto tempore reiciendis totam repellendus, asperiores esse, quaerat et quo! Similique fugiat in soluta eaque perferendis facere nisi quas culpa ipsum expedita molestias doloribus maiores magni illum voluptate quisquam, consectetur est quibusdam sint. Sapiente dignissimos blanditiis aliquid inventore nam suscipit facere illo in sed? Optio quia totam voluptatum a placeat, suscipit reiciendis fuga ut natus ad delectus voluptatibus blanditiis debitis iusto quam est minus aspernatur. Ipsam autem veniam pariatur quaerat tenetur incidunt. Tempore ratione tempora voluptate ipsa magni quidem dicta dolorem!")

e.fill(50);

e.write("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusantium placeat dolores exercitationem, sed expedita perferendis consequatur ipsum consequuntur molestiae cumque id minus corrupti illo repellendus, tempore facere sequi sit. Soluta repudiandae autem et laboriosam eos. Fugit, libero sunt ipsum repellat voluptatum inventore quam corporis explicabo saepe doloribus assumenda autem quibusdam voluptate quisquam. Consequatur eveniet inventore obcaecati! Impedit aliquid illo similique saepe voluptate aspernatur provident nesciunt sed aperiam exercitationem cumque minus tenetur molestiae, magni rerum, dolores quia beatae libero illum ipsum est itaque dolorum? Iste ab commodi repellendus dolore, atque magni. Facere quidem voluptatum magni inventore possimus ratione temporibus id, non autem eligendi corrupti qui tenetur quasi doloremque placeat officia voluptate quas fuga, facilis voluptas! Mollitia ut consectetur consequuntur iusto tempore reiciendis totam repellendus, asperiores esse, quaerat et quo! Similique fugiat in soluta eaque perferendis facere nisi quas culpa ipsum expedita molestias doloribus maiores magni illum voluptate quisquam, consectetur est quibusdam sint. Sapiente dignissimos blanditiis aliquid inventore nam suscipit facere illo in sed? Optio quia totam voluptatum a placeat, suscipit reiciendis fuga ut natus ad delectus voluptatibus blanditiis debitis iusto quam est minus aspernatur. Ipsam autem veniam pariatur quaerat tenetur incidunt. Tempore ratione tempora voluptate ipsa magni quidem dicta dolorem!")
