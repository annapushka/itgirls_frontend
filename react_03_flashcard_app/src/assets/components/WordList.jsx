import AddButton from "./AddButton";
import WordCard from "./WordCard";

const json = `[{
    "id": "12075",
    "english": "pale",
    "transcription": "[ peɪl ]",
    "russian": "бледный",
    "tags": "цвета"
}, {
    "id": "12076",
    "english": "yellow",
    "transcription": "[ ˈjeləʊ ]",
    "russian": "желтый",
    "tags": "цвета"
}, {
    "id": "12077",
    "english": "pearl",
    "transcription": "[ pɜːl ]",
    "russian": "жемчужный",
    "tags": "цвета"
}, {
    "id": "12078",
    "english": "emerald",
    "transcription": "[ ˈemərəld ]",
    "russian": "изумрудный",
    "tags": "цвета"
}, {
    "id": "12079",
    "english": "indigo",
    "transcription": "[ ˈɪndɪɡəʊ ]",
    "russian": "индиго",
    "tags": "цвета"
}, {
    "id": "12080",
    "english": "olive",
    "transcription": "[ ˈɒlɪv ]",
    "russian": "оливковый",
    "tags": "цвета"
}, {
    "id": "12081",
    "english": "sky blue",
    "transcription": "[ skaɪ bluː ]",
    "russian": "небесно-голубой",
    "tags": "цвета"
}, {
    "id": "12082",
    "english": "honeydew",
    "transcription": "[ ˈhʌnɪdjuː ]",
    "russian": "медовый",
    "tags": "цвета"
}, {
    "id": "12083",
    "english": "lime green",
    "transcription": "[ laɪm ɡriːn ]",
    "russian": "лимонно-зеленый",
    "tags": "цвета"
}, {
    "id": "12084",
    "english": "palm",
    "transcription": "[pa:m]",
    "russian": "пальма",
    "tags": "деревья"
}, {
    "id": "12085",
    "english": "bay",
    "transcription": "[bei]",
    "russian": "лавр",
    "tags": "деревья"
}, {
    "id": "12086",
    "english": "larch",
    "transcription": "[la:t∫]",
    "russian": "лиственница",
    "tags": "деревья"
}, {
    "id": "12088",
    "english": "ankle",
    "transcription": "[ ˈæŋkl̩ ]",
    "russian": "голеностоп",
    "tags": "анатомия"
}, {
    "id": "12089",
    "english": "appendix",
    "transcription": "[ əˈpendɪks ]",
    "russian": "аппендикс",
    "tags": "анатомия"
}, {
    "id": "12090",
    "english": "arm",
    "transcription": "[ ɑːm ]",
    "russian": "рука",
    "tags": "анатомия"
}, {
    "id": "12091",
    "english": "artery",
    "transcription": "[ ˈɑːtəri ]",
    "russian": "артерия",
    "tags": "анатомия"
}, {
    "id": "12092",
    "english": "backbone",
    "transcription": "[ ˈbækbəʊn ]",
    "russian": "позвоночник",
    "tags": "анатомия"
}, {
    "id": "12093",
    "english": "biceps",
    "transcription": "[ ˈbaɪseps ]",
    "russian": "бицепс",
    "tags": "анатомия"
}, {
    "id": "12094",
    "english": "bowels",
    "transcription": "[ ˈbaʊəlz ]",
    "russian": "кишечник",
    "tags": "анатомия"
}, {
    "id": "12095",
    "english": "brain",
    "transcription": "[ breɪn ]",
    "russian": "мозг",
    "tags": "анатомия"
}]`;

const words = JSON.parse(json);

function WordList(props) {
    return (
        <div className="list-box">
            <div className="list">
                {
                    words.map((word) =>
                        <WordCard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}></WordCard>
                    )
                }
            </div>
            <div className="list__control">
                <AddButton></AddButton>
            </div>
        </div>

    );
}

export default WordList;
