import re
from collections import Counter

def summarize_and_keywords(text):
    sents = re.split(r'(?<=[.!?])\s+', text.strip())
    summary = " ".join(sents[:3])
    words = re.findall(r"\w+", text.lower())
    stop = set(["the","and","a","to","of","in","is","it","that"])
    kw = [w for w,c in Counter(words).most_common(20) if w not in stop]
    return summary, kw[:10]
